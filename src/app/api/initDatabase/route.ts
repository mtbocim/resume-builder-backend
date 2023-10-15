import ContactInformation from "@/app/models/ContactInformation";

export async function GET(){
    await ContactInformation.sync();
    //add other syncs here
    return Response.json({value:'success'})
}