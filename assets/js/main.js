document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear()
})

const enquiryForm = document.querySelector('#enquiryForm')

if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!enquiryForm.reportValidity()) {
      return
    }

    const formData = new FormData(enquiryForm)
    const name = String(formData.get('name') || '').trim()
    const role = String(formData.get('role') || '')
    const classInterest = String(formData.get('class') || '')
    const phone = String(formData.get('phone') || '').trim()
    const message = String(formData.get('message') || '').trim()
    const lines = [
      'Hello Megha, I would like to enquire about Biology classes.',
      `Name: ${name}`,
      `I am a: ${role}`,
      `Class of interest: ${classInterest}`,
    ]

    if (phone) {
      lines.push(`My phone number: ${phone}`)
    }

    if (message) {
      lines.push(`Question: ${message}`)
    }

    const whatsappUrl = `https://wa.me/919582509011?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  })
}
