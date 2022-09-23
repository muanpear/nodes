<template>
 
    <div class="container mt-5 App">
        
       <div id="divToPrint">
        <div class="mt-6 mb-6">
        <div>
          
       
         <p><strong>KUY</strong></p>
         <p>นิติพงศ์ เกษสุวรรณ</p>
        </div>
      </div>
           
                     
           <table class="table-fixed">
  <thead>
    <tr>
      <th style="background: red; display: block;" class="border border-green-600 ...">Song</th>
      <th class="border border-green-600 ...">Artist</th>
      <th class="border border-green-600 ...">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
         </div>
         <button @click="printDocument()"
                      class="px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-400 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-500 focus:outline-none focus:shadow-outline-purple"
                    >Export</button>
         
       </div>
       
   </template>
   <style>
    .fern{
      text-align: right;
    }
   </style>
   <script>
   
   //importing bootstrap 5 and pdf maker Modules

  import pdfMake from 'pdfmake';
  // import pdfFonts from 'pdfmake/build/vfs_fonts';
  import pdfFonts from '@/assets/custom-fonts.js'
   import htmlToPdfmake from 'html-to-pdfmake';
   export default {
     
    
          
     
       methods: {
          printDocument() {
        
            
             //get table html
             const pdfTable = document.getElementById('divToPrint');
             //html to pdf format
             var html = htmlToPdfmake(pdfTable.innerHTML);
           console.log(html)
            //  const documentDefinition = { content: html };
             const documentDefinition = {
        content: [
          html
        ],
        defaultStyle: { // 4. default style 'KANIT' font to test
          font: 'Kanit'

        },
        
        styles:{
          'html-strong':{ // for <A>
      color:'purple', // all links should be 'purple'
      decoration:'', // remove underline
      alignment: "right",
    },
  }
        
      }
             pdfMake.vfs = pdfFonts.pdfMake.vfs;
             pdfMake.fonts = {
        // download default Roboto font from cdnjs.com
        Roboto: {
          normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
          bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
          italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
          bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        },
        // Kanit Font
        Kanit: { // 3. set Kanit font
          normal: 'Kanit-Regular.ttf',
          bold: 'Kanit-Medium.ttf',
          italics: 'Kanit-Italic.ttf',
          bolditalics: 'Kanit-MediumItalic.ttf'          
        }
      }
             pdfMake.createPdf(documentDefinition).open();
           
       }
   }  
   }
   </script>