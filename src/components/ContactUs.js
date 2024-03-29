import img from '../assets/images/img-contact.png'

export default function ContactUs() {
    return (
        <div className="contact container grid grid-even">
            <img src={img} alt="architecture building" className='img container__img grid-item-wide' />
            <div className="container__content content">
                <h2 className="title">Contact our Office</h2>
                <form className='container__form column'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <textarea cols="30" rows="10" placeholder='Type your message here...'></textarea>
                    <button className='container__btn btn-filled'>send</button>
                </form>
            </div>
        </div>
    )
}
