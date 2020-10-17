export class BuilderClass{
  public static builder(obj1To, objFor){
    for(let pCli of Object.keys(objFor)){
      if(pCli === "http") continue
      for(let pThis of Object.keys(obj1To)){
        if(pThis === pCli){
          obj1To[pThis] = objFor[pCli]
        }
      }
    }
  }
}
