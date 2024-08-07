
// const axios = require('axios');

const apiKey = 'sk-Ytr9iTCN9qmPigdM5ihzFtx6SJ2R-D50w-9UuGcMp4T3BlbkFJ1xHiW9D8V64soiT-9kbYI8xagnROhHJQvDLmQUlFYA';
const url = 'https://api.openai.com/v1/chat/completions';

async function getData(content){
console.log("🚀 ~ file: script.js:8 ~ getData ~ content:", content)
try{
    const {data} = await axios.post(url, {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `
            you will ask something from user according to this data.

            Data Jam Kantor
            [
              {
                "id": 1,
                "hari": "Senin",
                "jam_buka": "08:00",
                "jam_tutup": "17:00"
              },
              {
                "id": 2,
                "hari": "Selasa",
                "jam_buka": "08:00",
                "jam_tutup": "17:00"
              },
              {
                "id": 3,
                "hari": "Rabu",
                "jam_buka": "08:00",
                "jam_tutup": "17:00"
              },
              {
                "id": 4,
                "hari": "Kamis",
                "jam_buka": "08:00",
                "jam_tutup": "17:00"
              },
              {
                "id": 5,
                "hari": "Jumat",
                "jam_buka": "08:00",
                "jam_tutup": "16:00"
              },
              {
                "id": 6,
                "hari": "Sabtu",
                "jam_buka": "09:00",
                "jam_tutup": "14:00"
              },
              {
                "id": 7,
                "hari": "Minggu",
                "jam_buka": "Tutup",
                "jam_tutup": "Tutup"
              }
            ]

            Data Asuransi
            [
              {
                "id": 1,
                "nama_pemegang_polisi": "John Doe",
                "nomor_polisi": "A123456789",
                "jenis_asuransi": "Kesehatan",
                "tanggal_mulai": "2024-01-01",
                "tanggal_berakhir": "2024-12-31",
                "premi": 5000000,
                "status": "Aktif"
              },
              {
                "id": 2,
                "nama_pemegang_polisi": "Jane Smith",
                "nomor_polisi": "B987654321",
                "jenis_asuransi": "Kendaraan",
                "tanggal_mulai": "2024-03-15",
                "tanggal_berakhir": "2025-03-14",
                "premi": 3000000,
                "status": "Aktif"
              },
              {
                "id": 3,
                "nama_pemegang_polisi": "Alice Johnson",
                "nomor_polisi": "C123456789",
                "jenis_asuransi": "Kehidupan",
                "tanggal_mulai": "2024-06-01",
                "tanggal_berakhir": "2025-05-31",
                "premi": 7000000,
                "status": "Non-Aktif"
              },
              {
                "id": 4,
                "nama_pemegang_polisi": "Bob Brown",
                "nomor_polisi": "D987654321",
                "jenis_asuransi": "Properti",
                "tanggal_mulai": "2024-02-01",
                "tanggal_berakhir": "2025-01-31",
                "premi": 4000000,
                "status": "Aktif"
              }
            ]
          `
        },
        {
          role: 'user',
          content: content
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })
    
    console.log("🚀 ~ file: script.js:24 ~ getData ~ data:", data)
    // console.log("🚀 ~ file: script.js:30 ~ getData ~ data.completion.choices[0].message.content:", data.completion.choices[0].message.content)
    return data.choices[0].message.content
}catch(err){
    console.log("🚀 ~ file: script.js:11 ~ getData ~ err:", err)
}
}



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

async function sendMessage() {
  try{
    var msg = document.getElementById("msg").value;
    if (msg.trim() === "") return;
  
    addMessage(msg, 'user');
  
    // Mocking a bot response after sending the message
      const botResponse = await getData(msg)
      console.log("🚀 ~ file: script.js:50 ~ sendMessage ~ botResponse:", botResponse)
      addMessage(botResponse, 'bot');
  
    document.getElementById("msg").value = "";
  }catch(err){
    console.log("🚀 ~ file: script.js:46 ~ sendMessage ~ err:", err)
    
  }
}

function addMessage(text, sender) {
  var messageContainer = document.getElementById("messageContainer");
  var messageDiv = document.createElement("div");
  messageDiv.className = "message " + sender;
  messageDiv.textContent = text;
  messageContainer.appendChild(messageDiv);

  // Scroll to the bottom of the message container
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

