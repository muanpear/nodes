<!-- <template>
  <div id="PdfForm" ref="document">
    <div id="element-to-convert">
      <div><span>ITS-2022-0006-NB</span></div>
      
      <div><span>วันที่ 1 มิถุนายน 2565</span></div>

      <div><center><span>หนังสือส่งมอบอุปกณ์บริษัท</span></center></div>
    </div>
    <button @click="exportToPDF">Export to PDF</button>
  </div>
</template> -->
<template>
   <button @click="exportToPDF">Export to PDF</button>
 <div class="flex items-center justify-center bg-gray-100 max-w-max w-min-h-screen" id="element-to-convert">
            <div class="bg-white max-w-max">
                <div class="flex justify-between pt-20 pb-10 pl-28 pr-28">
                    <div>
                        <p>ITS-2022-0041-NB</p>
                    </div>
                    <div>
                      <p>วันที่ 5 มิถุนายน 2565</p>
                       
                    </div>
                </div>
                <div class="flex justify-center pt-5">
                    <h1>หนังสือส่งมอบอุปกรณ์บริษัท</h1>
                </div>
                <div class="flex pt-5 tracking-widest">
                    ข้าพเจ้านาย กันดิศ ชมภู    รหัสพนักงาน 20650987
                </div>
                <div class="flex pt-5">
                  แผนก Accounting   ตำแหน่ง Admin  เป็นพนักงานของบริษัทเมื่อ 20/05/2557
                </div>
                <div class="flex pt-5">
                  เบอร์ติดต่อ 089-02940303 ขอยืนยันว่าข้าพเจ้าได้รับมอบอุปกณ์ ดังต่อไปนี้จากบริษัท
                </div>
                <div class="flex justify-center pt-5">
                    <div class="border-b border-gray-200 shadow">
                        <table class="">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        #
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        รายการ
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        ยี่ห้อ
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        รุ่น
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        สี
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        สภาพ
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        ชื่อเครื่อง
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        Serial NO.
                                    </th>
                                    <th class="px-4 py-2 text-xs text-gray-500 ">
                                        ทะเบียนสินทรัพย์
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            Notebook
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">Acer</div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        TMP449-G2-MG-58NQ
                                    </td>
                                    <td class="px-6 py-4">
                                        ดำ
                                    </td>
                                    <td class="px-6 py-4">
                                        สมบูรณ์
                                    </td>
                                    <td class="px-6 py-4">
                                        NB-TELECOM504
                                    </td>
                                    <td class="px-6 py-4">
                                        NXVEJST02803023B34300
                                    </td>
                                    <td class="px-6 py-4">
                                        18-2403230434
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="flex justify-between p-4">
                    หมายเหตุ รายการ Notebook ประกอบด้วย ................
                </div>
                

                <div class="flex justify-between p-4">
                    ข้าพเจ้าขอยืนยันว่าได้รับมอบอุปกรณ์ตามรายการดังลก่าวข้างต้น ในสภาพสมบูรณ์ครบถ้วนและตกลงปฎิบัติตามเงื่อนไขการรับมอบอุปกรณ์ของบริษัท
                </div>
                <div class="w-full h-0.5 bg-black"></div>

                <div class="px-3 mb-8 border border-t-2 border-gray-200"></div>

    <div class="flex justify-between px-3 py-2 mb-4">
      <div>ผู้ส่งมอบอุปกรณ์</div>
      <div>ผู้ส่งมอบอุปกรณ์</div>
      <div class="text-right">ผู้บังคับบัญชา</div>
    </div>

    <div class="flex justify-between px-3 py-2 mb-4">
      <div>_____________</div>
      <div>_____________</div>
      <div class="text-right">_____________</div>
    </div>

    <div class="flex justify-between px-3 py-2 mb-4">
      <div>วันที่__________</div>
      <div>วันที่__________</div>
      <div class="text-right">วันที่__________</div>
    </div>

      </div>
            </div>
       
 
 </template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: "PdfForm",
  methods: {
    exportToPDF() {
      var element = document.getElementById('element-to-convert');
        //  element.style.width = '700px';
        //  element.style.height = '900px';
        var opt = {
            margin:       0,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait',precision: '12' }
          };
        
        // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
        // html2pdf().set(opt).from(element).save();
        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
  window.open(pdf.output('bloburl'), '_blank');
});
  //     html2pdf(document.getElementById("element-to-convert"), {
	// 			margin: 0,
  //       filename: "i-was-html.pdf",
  //       image: { type: 'jpeg', quality: 0.98 },
  // html2canvas: { scale: 1 },
  // jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
	// 		});
    },
  },
};
</script>

<style>
@import url('http://fonts.googleapis.com/css?family=Sarabun');
body { 
        font-family: 'Sarabun',sans-serif;
        font-size: 10px;
 }
 #element-to-convert{
  font-family: 'Sarabun',sans-serif;
        font-size: 10px;
 }
</style>