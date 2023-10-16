import ContactInformation from "@/app/models/ContactInformation";
import User from "@/app/models/User";
import Education from "@/app/models/Education";

export async function POST(){
    await ContactInformation.sync({ alter: true });
    await User.sync({ alter: true })
    await Education.sync({ alter: true })
    return Response.json({value:'success'})
}