const frmEmail = document.getElementById('frm-Email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId ="service_08gy4hn"
const templateId = "template_0dbdls9"
const apiKey = "ujgOhoXZPtCgakOjZ"



function sendEmail(event) {
   event.preventDefault()
   emailjs.init(serviceId)

   emailjs.sendForm(serviceId,templateId,frmEmail,apiKey)
   .then(result => Swal.fire("Su mensaje se ha enviado con exito.") + result )
   .catch(error => {
    Swall.fire({
        icon:"error",
        title:"Oops...",
        text:"No ha sido posible enviar el mensaje!",
       });
      });
    }