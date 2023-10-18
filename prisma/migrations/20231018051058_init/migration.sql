-- CreateTable
CREATE TABLE "ContactInformation" (
    "id" SERIAL NOT NULL,
    "name" JSON NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255),
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "ContactInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "institution_name" VARCHAR(255) NOT NULL,
    "ed_focus" VARCHAR(255),
    "gpa" DECIMAL(4,3),
    "location" VARCHAR(255),
    "start_date" DATE,
    "finish_date" DATE,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillSets" (
    "id" SERIAL NOT NULL,
    "skill_set" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "SkillSets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillTag" (
    "SkillId" INTEGER NOT NULL,
    "TagId" INTEGER NOT NULL,

    CONSTRAINT "SkillTag_pkey" PRIMARY KEY ("SkillId","TagId")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "skill" TEXT NOT NULL,
    "skill_set_id" INTEGER NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Summaries" (
    "id" SERIAL NOT NULL,
    "summary" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Summaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SummaryTag" (
    "SummaryId" INTEGER NOT NULL,
    "TagId" INTEGER NOT NULL,

    CONSTRAINT "SummaryTag_pkey" PRIMARY KEY ("SummaryId","TagId")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "isAdmin" BOOLEAN DEFAULT false,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_skill_set_id_skill" ON "Skills"("skill_set_id", "skill");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillSets" ADD CONSTRAINT "SkillSets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillTag" ADD CONSTRAINT "SkillTag_SkillId_fkey" FOREIGN KEY ("SkillId") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillTag" ADD CONSTRAINT "SkillTag_TagId_fkey" FOREIGN KEY ("TagId") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_skill_set_id_fkey" FOREIGN KEY ("skill_set_id") REFERENCES "SkillSets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Summaries" ADD CONSTRAINT "Summaries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SummaryTag" ADD CONSTRAINT "SummaryTag_SummaryId_fkey" FOREIGN KEY ("SummaryId") REFERENCES "Summaries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SummaryTag" ADD CONSTRAINT "SummaryTag_TagId_fkey" FOREIGN KEY ("TagId") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
