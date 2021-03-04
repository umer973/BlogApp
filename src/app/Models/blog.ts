export class Blog {
    load() {
      if(localStorage.getItem('blogs') === null || localStorage.getItem('blogs') == undefined) {
        console.log('No blogs Found... Creating...');
        let blgs = [
          {
            id:1,
            title:'Prashant',
            description:'Panigrahi'
           
          }, 
          {
            id:2,
            title:'Prashant',
            description:'Panigrahi'
          }, {
            id:3,
            title:'Prashant',
            description:'Panigrahi'
          },
        ];
  
        localStorage.setItem('employees', JSON.stringify(blgs));
        return 
      } else {
        console.log('Found blogs...');
      }
    }
  }