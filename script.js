const calTemp= ()=>{
    const temp=document.getElementById('giventemp').value;
    const u=document.getElementById('givenunit').value;
    let result;
    
    const tocel=(far)=>{
        let c=(far-32)*(5/9);
        return c;
     }
     const tofahen=(cell)=>{
        let f=(cell)*(9/5)+32;
        console.log(f);
        return f;
     }
     if(u=='unit1')
    {
        result=tofahen(temp);
        document.getElementById('text2').innerHTML= "= "+result+ "°F";
    }
    else if(u=='unit2')
    {
        result=tocel(temp);
        document.getElementById('text2').innerHTML= "= "+result+ "°C";
    }
    else{
        document.getElementById('text2').innerHTML='Please select a valid unit';
    }
    
}