import Swal from "sweetalert2";

const ContactUs = () => {


    const handleSubmit=()=>{
        event.preventDefault();
        Swal.fire(
            'Submitted Successfully!',
            'We wil contact you soon!',
            'success'
          )
          event.target.reset()
    }
  return (
   
        <div className="shadow-xl rounded-xl">
          <div className="container mx-auto">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="input input-bordered"
                  required
                  name="contact"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Leave a massage</span>
                </label>
               <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Massage" className="input input-bordered">
               
               </textarea>
              </div>
              <div className=" mt-6">
                <button className="btn outline-none border-none">Submit</button>
              </div>
    
            </form>
          </div>
        </div>
 
  );
};

export default ContactUs;
