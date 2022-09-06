             const jobs=[{
                id:'1',
                a:'publicity agent',
                b:'writer'},
            {  id:'2',
                a:'underground scientist',
                b:'nurse' 
            },
            {  id:'3',
                a:'finacial analyst',
                b:'Drama actor'
            },
            {  id:'4',
                a:'astronomer',
                b:'wood worker'
            },
            {  id:'5',
                a:'aouditor',
                b:'gold worker'
            },
            {  id:'6',
                a:'surveyor',
                b:'singer kavi'
            },
            {  id:'7',
                a:'man who give fundemental things to  a embloy',
                b:'occian sciantist'
            },
            {  id:'8',
                a:'personal manager',
                b:'computer programmer'
            },
            {  id:'9',
                a:'accident exmer',
                b:'song writer'
            },
            {  id:'10',
                a:'trackter driver',
                b:'chitti owner'
            },
            {  id:'11',
                a:'deaf teacher',
                b:'furniter maker'
            },
            {  id:'12',
                a:'chemical sciantist',
                b:'statistian'
            },
            {  id:'13',
                a:'organisationer & method analyser',
                b:'vetinary surgon'
            },
            {  id:'14',
                a:'youth club leader',
                b:'judge'
            },
            {  id:'15',
                a:'nutrition specialist',
                b:'politicl worker'
            },
            {  id:'16',
                a:'architech',
                b:'evangelist'
            },
            {  id:'17',
                a:'estate agent',
                b:'hostel warden'
            },
            {  id:'18',
                a:'social worker',
                b:'editor'
            },
            {  id:'19',
                a:'interior designer',
                b:'chemist'
            },
            {  id:'20',
                a:'press agent',
                b:'nuclear physcist'
            },
            {  id:'21',
                a:'jursnalist',
                b:'teacher'
            },
            {  id:'22',
                a:'accountent',
                b:'PRO'
            },
            {  id:'23',
                a:'car salesman',
                b:'upholstery'
            },
            {  id:'24',
                a:'liabraian',
                b:'acountent'
            },
            {  id:'25',
                a:'photographer', 
                b:'tax officer'
            },
            {  id:'26',
                a:'radio anouncer',
                b:'ecnomist'
            },
            {  id:'27',
                a:'novalist',
                b:'holtycultarist'
            },
            {  id:'28',
                a:'physical training instructor',
                b:'fashion designer'
            },
            {  id:'29',
                a:'drama story writer',
                b:'pchycolagist'
            },
            
            {  id:'30',
                a:'forester',
                b:'metal learner'
            },
            {  id:'31',
                a:'toy maker',
                b:'painter'
            }, 
            {  id:'32',
                a:'designer',
                b:'health and soical worker'
            },
            {  id:'33',
                a:'mechanical engineer',
                b:'boook rewier'
            },
            {  id:'34',
                a:'bactriologist',
                b:'singer'
            },
            
            {  id:'35',
                a:'grandakarn',
                b:'stage designer'
            },
            {  id:'36',
                a:'illatriotionst painater',
                b:'demonstetor'
                
            },
            {  id:'37',
                a:'instruments maker',
                b:'bank offcicer'
            },
            {  id:'38',
                a:'shilpy',
                b:'commercial word writer content writer'
            },
           
            {  id:'39',
                a:'forencic sciantist',
                b:'actor'
            },
            {  id:'40',
                a:'electronic technican',
                b:'kala object saler'
            },
            {  id:'41',
                a:'adocate',
                b:'sale eccicutive'
            },
            {  id:'42',
                a:'steward',
                b:'carrier officer'
            }
        ]
       
        const instrstedArea=[
            {area:"your fucking intrsted in litreature",
              discription:"literature is fucking bitch"},

              {area:"your fucking intrsted in creative",
              discription:"literature is fucking creative"},

              {area:"your fucking intrsted in social work",
              discription:"literature is fucking social worker"},

              {area:"your fucking intrsted in litreature",
              discription:"literature is fucking exicutive"},
              
              {area:"your fucking intrsted in exicutive",
              discription:"exicutive is fucking "},

              {area:"your fucking intrsted in research",
              discription:"research is fucking bitch"},

              {area:"your fucking intrsted in brain want related",
              discription:"literature is fucking brain essestional"},

              {area:"your fucking intrsted in leadership ",
              discription:"leadership fuck is fucking bitch"},
        ]
    

        let currentItem=0
        
        let sum=0
        
        const itemL_sem=[]
        const itemC_sem=[]
        const itemS_sem=[]
        const itemX_sem=[]
        const itemR_sem=[]
        const itemP_sem=[]
        const itemA_sem=[]

        const sumList=[]


        const itemL=['editor','jursnalist','liabraian','singer kavi',
                     'writer','adocate','actor',
                     'commercial word writer content writer','grandakarn','boook rewier',
                     'drama story writer','novalist']
        const itemC=['song writer','architech','interior designer',
                    'photographer','fashion designer','painter',
                    'designer','singer','stage designer',
                    'illatriotionst painater','shilpy','kala object saler']
        const itemS=['nurse' ,'Drama actor','man who give fundemental things to  a embloy',
                     'personal manager','deaf teacher','youth club leader',
                     'hostel warden','social worker','teacher',
                     'physical training instructor','health and soical worker','carrier officer']
        const itemX=['publicity agent','chitti owner','judge',
                    'politicl worker','evangelist','hostel warden','press agent',
                    'PRO','car salesman','radio anouncer',
                    'demonstetor','sale eccicutive']
        const itemR=['underground scientist','astronomer','occian sciantist',
                    'chemical sciantist','vetinary surgon','nutrition specialist','chemist',
                    'nuclear physcist','pchycolagist','metal learner',
                    'bactriologist','forencic sciantist']
        const itemP=['wood worker','gold worker','trackter driver',
                    'furniter maker','upholstery','holtycultarist',
                    'forester','toy maker','mechanical engineer',
                    'instruments maker','electronic technican','steward']
        const itemA=['finacial analyst','aouditor','surveyor',
                    'computer programmer','accident exmer','statistian',
                    'organisationer & method analyser','accountent','tax officer',
                    'acountent','ecnomist','bank offcicer']
                 


        const btn=document.querySelector('button')
        const frstjob=document.getElementById('one')
        const scndjob=document.getElementById('two')
        const qustionNo=document.getElementById('zero')
        

        // input radio buttion fetching
         const fjft=document.querySelectorAll('#fjrd')
         const sjft=document.querySelectorAll('#sjrd')
       // answer the last output that is intrested area
       
        const intersteddiscription=document.getElementById("anser")
        const interstedHead=document.getElementById('area')
         
      console.log(interstedHead,intersteddiscription)
 
        // frstjob.innerHTML=jobs[currentItem].a
        // scndjob.innerHTML=jobs[currentItem].b
 
       
    //when buttion press
   
            
            btn.addEventListener('click',function(){

                if(currentItem<42){
                    getjobs(currentItem++)
                    }
                else{
                    alert('you compelted')
                    
                    }
    
       // buttion get unchecked after each qustions
                // for(let i=0;i<fjft.length;i++){
                //     if( fjft[i].checked==true || sjft[i].checked==true){
                //         fjft[i].checked=false
                //         sjft[i].checked=false
                //         }
                //     }
                   
                 console.log(itemL_sem,itemC_sem,itemS_sem,itemX_sem,itemR_sem,itemP_sem,itemA_sem)
    
    
                 //sum of each array after
                        
                 if(itemS_sem.length==12){
                    let l=0
                    let c=0
                    let s=0
                    let x=0
                    let r=0
                    let p=0
                    let a=0
                    for(let i=0;i<itemL_sem.length;i++){
                        l+=Number(itemL_sem[i])}
                     for(let i=0;i<itemC_sem.length;i++){
                        c+=Number(itemC_sem[i])
                     }for(let i=0;i<itemS_sem.length;i++){
                        s+=Number(itemS_sem[i])
                     }for(let i=0;i<itemX_sem.length;i++){
                        x+=Number(itemX_sem[i])
                     }for(let i=0;i<itemR_sem.length;i++){
                        r+=Number(itemR_sem[i])
                     }for(let i=0;i<itemP_sem.length;i++){
                        p+=Number(itemP_sem[i])
                     }for(let i=0;i<itemA_sem.length;i++){
                        a+=Number(itemA_sem[i])
                     }

                     if(sumList.length<7){
                        sumList.push(l,c,s,x,r,p,a)
                    }
                     console.log(sumList)
                     const max= Math.max(...sumList)
                     const indux = sumList.indexOf(max)

                     //innerhtml

                     interstedHead.innerHTML=instrstedArea[indux].area
                     intersteddiscription.innerHTML=instrstedArea[indux].discription
                 }
    
              })

            
        
   
     
  
    //pass the value to next page








    function getjobs(currentItem){
       
       //changing the jobs in HTML page
        qustionNo.innerHTML=jobs[currentItem].id
        frstjob.innerHTML=jobs[currentItem].a
        scndjob.innerHTML=jobs[currentItem].b
        
        //assign the each jobs to it and ib
        let it= jobs[currentItem].a
        let ib= jobs[currentItem].b

        //collect the mark of each jobs and assign to corresponding array
        
        for(i=0;i<itemL.length;i++){
           
            if(it==itemL[i]){
                

                
                if((fjft[0].checked==true)  ){
                    itemL_sem.push(fjft[0].value) 
                    
                }if( fjft[1].checked==true){
                    itemL_sem.push(fjft[1].value) 
                    
                }if((fjft[2].checked==true)){
                    itemL_sem.push(fjft[2].value) 
                    
                }if((fjft[3].checked==true)){
                    itemL_sem.push(fjft[3].value) 
                    
                }
                   
                
                 
        
            }
            else if(ib==itemL[i]){
                
                
        
                if((sjft[0].checked==true) ){
                    itemL_sem.push(fjft[0].value) 
                    
                }
                if((sjft[1].checked==true)){
                    itemL_sem.push(fjft[1].value) 
                    
                }if((sjft[2].checked==true)){
                    itemL_sem.push(fjft[2].value) 
                    
                }if((sjft[3].checked==true)){
                    itemL_sem.push(fjft[3].value) 
                    
                }   
               
                
            }
                
             
        
        }
        for(i=0;i<itemC.length;i++){
           
            if(it==itemC[i]){
                

                
                if((fjft[0].checked==true)  ){
                    itemC_sem.push(fjft[0].value) 
                    
                }if( fjft[1].checked==true){
                    itemC_sem.push(fjft[1].value) 
                    
                }if((fjft[2].checked==true)){
                    itemC_sem.push(fjft[2].value) 
                    
                }if((fjft[3].checked==true)){
                    itemC_sem.push(fjft[3].value) 
                    
                }
                   
                
                 
        
            }
            else if(ib==itemC[i]){
                
                
                
                if((sjft[0].checked==true) ){
                    itemC_sem.push(fjft[0].value) 
                    
                }
                if((sjft[1].checked==true)){
                    itemC_sem.push(fjft[1].value) 
                    
                }if((sjft[2].checked==true)){
                    itemC_sem.push(fjft[2].value) 
                    
                }if((sjft[3].checked==true)){
                    itemC_sem.push(fjft[3].value) 
                    
                }   
               
                
            }
                
             
        
        }
        for(i=0;i<itemS.length;i++){
           
            if(it==itemS[i]){
                

                
                if((fjft[0].checked==true)  ){
                    itemS_sem.push(fjft[0].value) 
                    
                }if( fjft[1].checked==true){
                    itemS_sem.push(fjft[1].value) 
                    
                }if((fjft[2].checked==true)){
                    itemS_sem.push(fjft[2].value) 
                    
                }if((fjft[3].checked==true)){
                    itemS_sem.push(fjft[3].value) 
                    
                }
                   
                
                 
        
            }
            else if(ib==itemS[i]){
                
                
                
                if((sjft[0].checked==true) ){
                    itemS_sem.push(fjft[0].value) 
                    
                }
                if((sjft[1].checked==true)){
                    itemS_sem.push(fjft[1].value) 
                    
                }if((sjft[2].checked==true)){
                    itemS_sem.push(fjft[2].value) 
                    
                }if((sjft[3].checked==true)){
                    itemS_sem.push(fjft[3].value) 
                    
                }   
               
                
            }
                
             
        
        }
        for(i=0;i<itemX.length;i++){
           
            if(it==itemX[i]){
                

                
                if((fjft[0].checked==true)  ){
                    itemX_sem.push(fjft[0].value) 
                    
                }if( fjft[1].checked==true){
                    itemX_sem.push(fjft[1].value) 
                    
                }if((fjft[2].checked==true)){
                    itemX_sem.push(fjft[2].value) 
                    
                }if((fjft[3].checked==true)){
                    itemX_sem.push(fjft[3].value) 
                    
                }
                   
                
                 
        
            }
            else if(ib==itemX[i]){
                
                
                
                if((sjft[0].checked==true) ){
                    itemX_sem.push(fjft[0].value) 
                    
                }
                if((sjft[1].checked==true)){
                    itemX_sem.push(fjft[1].value) 
                    
                }if((sjft[2].checked==true)){
                    itemX_sem.push(fjft[2].value) 
                    
                }if((sjft[3].checked==true)){
                    itemX_sem.push(fjft[3].value) 
                    
                }   
               
                
            }
                
             
        
        }
        for(i=0;i<itemR.length;i++){
           
            if(it==itemR[i]){
                

                
                if((fjft[0].checked==true)  ){
                    itemR_sem.push(fjft[0].value) 
                    
                }if( fjft[1].checked==true){
                    itemR_sem.push(fjft[1].value) 
                    
                }if((fjft[2].checked==true)){
                    itemR_sem.push(fjft[2].value) 
                    
                }if((fjft[3].checked==true)){
                    itemR_sem.push(fjft[3].value) 
                    
                }
                   
                
                 
        
            }
            else if(ib==itemR[i]){
                
                
                
                if((sjft[0].checked==true) ){
                    itemR_sem.push(fjft[0].value) 
                    
                }
                if((sjft[1].checked==true)){
                    itemR_sem.push(fjft[1].value) 
                    
                }if((sjft[2].checked==true)){
                    itemR_sem.push(fjft[2].value) 
                    
                }if((sjft[3].checked==true)){
                    itemR_sem.push(fjft[3].value) 
                    
                }   
               
                
            }
                
             
        
        }
        for(i=0;i<itemP.length;i++){
           
            if(it==itemP[i]){
                

                
                if((fjft[0].checked==true)  ){
                    itemP_sem.push(fjft[0].value) 
                    
                }if( fjft[1].checked==true){
                    itemP_sem.push(fjft[1].value) 
                    
                }if((fjft[2].checked==true)){
                    itemP_sem.push(fjft[2].value) 
                    
                }if((fjft[3].checked==true)){
                    itemP_sem.push(fjft[3].value) 
                    
                }
                   
                
                 
        
            }
            else if(ib==itemP[i]){
                
                
                
                if((sjft[0].checked==true) ){
                    itemP_sem.push(fjft[0].value) 
                    
                }
                if((sjft[1].checked==true)){
                    itemP_sem.push(fjft[1].value) 
                    
                }if((sjft[2].checked==true)){
                    itemP_sem.push(fjft[2].value) 
                    
                }if((sjft[3].checked==true)){
                    itemP_sem.push(fjft[3].value) 
                    
                }   
               
                
            }
                
             
        
        }
        for(i=0;i<itemA.length;i++){
           
            if(it==itemA[i]){
                

                
                if((fjft[0].checked==true)  ){
                    itemA_sem.push(fjft[0].value) 
                    
                }if( fjft[1].checked==true){
                    itemA_sem.push(fjft[1].value) 
                    
                }if((fjft[2].checked==true)){
                    itemA_sem.push(fjft[2].value) 
                    
                }if((fjft[3].checked==true)){
                    itemA_sem.push(fjft[3].value) 
                    
                }
                   
                
                 
        
            }
            else if(ib==itemA[i]){
                
                
                
                if((sjft[0].checked==true) ){
                    itemA_sem.push(fjft[0].value) 
                    
                }
                if((sjft[1].checked==true)){
                    itemA_sem.push(fjft[1].value) 
                    
                }if((sjft[2].checked==true)){
                    itemA_sem.push(fjft[2].value) 
                    
                }if((sjft[3].checked==true)){
                    itemA_sem.push(fjft[3].value) 
                    
                }   
               
                
            }
                
             
        
        }
       
    }

   


   


        