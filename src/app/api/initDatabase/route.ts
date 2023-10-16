import ContactInformation from "@/app/models/ContactInformation";
import User from "@/app/models/User";

export async function GET(){
    await ContactInformation.sync();
    await User.sync()
    return Response.json({value:'success'})
}