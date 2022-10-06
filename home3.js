ex4();

    function ex4() {

    let fileValues;
    let finalvalues = "";

    document.getElementById('readfile').onchange = function(){
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function(progressEvent){
          fileValues = this.result.split(/\r?\n/);
          for(let m = 0; m < fileValues.length; m++){

            finalvalues += "\r\n";
            
            for(let i = 0; i < fileValues.length; i++){

              if(i <= (fileValues.length - 1)){
              let line1 = fileValues[m].split(",");
              let line2 = fileValues[i].split(",");

              let val1 = line1[0];
              let val2 = line2[0];

              let val3 = line1[1];
              let val4 = line2[1];

              let val5 = line1[2];
              let val6 = line2[2];

              let val7 = line1[3];
              let val8 = line2[3];

              let val9 = line1[4];
              let val10 = line2[4];

              let val11 = line1[5];
              let val12 = line2[5];

              let val13 = line1[6];
              let val14 = line2[6];

              let val15 = line1[7];
              let val16 = line2[7];

              let val17 = line1[8];
              let val18 = line2[8];

              let val19 = line1[9];
              let val20 = line2[9];


              let final = Math.sqrt(Math.pow(val1-val2, 2) + Math.pow(val3-val4, 2) + Math.pow(val5-val6, 2) + Math.pow(val7-val8, 2)  + Math.pow(val9-val10, 2)  + Math.pow(val11-val12, 2) + Math.pow(val13-val14, 2) + Math.pow(val15-val16, 2) + Math.pow(val17-val18, 2) + Math.pow(val19-val20, 2));
              finalvalues += final.toFixed(2) + ",";
              
            }

          }
      }
      save();
      function save(filename, data) {
        filename = "Math";
        data = finalvalues
        console.log(data)
        const blob = new Blob([data], {type: 'text/csv'});
        if(window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else{
            const elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;        
            document.body.appendChild(elem);
            elem.click();        
            document.body.removeChild(elem);
        }
    }
        };
        reader.readAsText(file);
      };
    }
