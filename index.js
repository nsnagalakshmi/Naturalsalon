const data=document.querySelectorAll('.java')
const speed=10
data.forEach(java=>
    {
        //for time out function
        const updatecount=()=>
        {
            const values=+java.getAttribute('data-target');
            const innervalue=+java.innerText;
            const update=values/speed;
            if(innervalue < values)
            {
                java.innerText=innervalue+update;
                setTimeout(updatecount,1000)
            }
            else{
                java.innerText=values;
            }
        }
        updatecount()
    })
