import { PrismaClient } from "@prisma/client"
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
const testDB = process.env.TEST_DATABASE_URL
const { exec } = require('child_process');
export const testClient = new PrismaClient({ datasources: { db: { url: testDB } } })

export default async function setup() {
    const command = `npx prisma migrate reset --force --schema /home/mtbocim/resume-builder-backend/prisma/test_schema.prisma`;

    async function resetPrismaMigrations() {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error: ${stderr}`);
                return;
            }
            console.log(`Success: ${stdout}`);
        });
    }
    async function prismaGenerate() {
        exec('npx prisma generate --generator test_client', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error: ${stderr}`);
                return;
            }
            console.log(`Success: ${stdout}`);
        });
    }

    // Call the function to reset Prisma migrations
    await resetPrismaMigrations();
    await prismaGenerate()
    await testClient.$connect();
}
