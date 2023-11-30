"use client"

export default function Home() {

  const onSubmit = async (e) => {
    e.preventDefault();

    // obtiene el valor del formulario y...
    const formData = new FormData(e.target);
    console.log(formData.get('phone'));
    console.log(formData.get('message'));

    // ... lo almacena en un objeto
    const sms = {
      phone: formData.get('phone'),
      message: formData.get('message')
    }

    // envia el objeto al servidor
    const res = await fetch("/api/sms", {
      method: 'POST',
      body: JSON.stringify(sms),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // almacena la respuesta
    const data = await res.json();

    alert("Message sent");
    console.log(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* FORMULARIO */}
      <form className='bg-slate-900 p-10'
      onSubmit={onSubmit}>
        <h1 className='text-white text-3xl font-bold'>Send a SMS</h1>

        {/* PHONE NUMBER */}
        <label className="label" htmlFor="phone" placeholder="Write your phone number here:">Write a phone number herre:</label>
        <input name='phone'
        className='text'
        type="tel"
        autoComplete="off" />

        {/* TEXT MESSAGE */}
        <label className="label" htmlFor='message'>Write your message here:</label>
        <textarea name="message"
        className='text w-full'
        placeholder="Write your message here" />

         {/* SUBMIT BUTTON */}
         <button className='button'>Send</button>
      </form>
    </main>
  )
}
