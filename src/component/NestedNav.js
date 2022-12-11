import React from 'react'

function NestedNav() {
  return (
    <div>
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-md-offset-1 col-md-6 col-lg-6">
            <div class="tab" role="tabpanel">
               
                <ul class="nav nav-tabs " role="tablist">
                    <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">All Posts (32)</a></li>
                    <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Article</a></li>
                    <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">Event</a></li>
                    <li role="presentation"><a href="#Section4" aria-controls="home" role="tab" data-toggle="tab">Education</a></li>
                    <li role="presentation"><a href="#Section5" aria-controls="profile" role="tab" data-toggle="tab">Job</a></li>
                    
                </ul>
                

                <div class="tab-content tabs">
                    <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col-12">
                          <div class="card">
                            <img src='http://localhost:3000/img/Rectangle 5.png' class="card-img-top" alt="..."/>
                        <div class="card-body ">
                          <h5 class="card-title  ml-5">✍️ Article</h5>
                          <h4 class="card-text font-weight-bold text-dark  ml-5">What if famous brands had regular fonts? Meet 
                           <a className='btn'>   <img className='pl-5 ml-5' src='http://localhost:3000/img/vector (1).png'/> </a>
                              RegulaBrands!
                              </h4>

                          <p class="card-text  text-dark  ml-5">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                              
                                
                                    <div className='mt-5 ml-0 col-12'>
                                        <div className='col-lg-4 col-md-12 float-left'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/Rectangle 31.png'/>
                                               Sarthak Kamra
                                        </p>

                                        </div>
                                        <div className='col-lg-4 col-md-12 pt-3 float-right'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/eye.svg'/>
                                            1.4k views
                                            <img className='mr-4 pl-5' src='http://localhost:3000/img/Vector (2).png'/>
                                        </p>

                                        </div>

                                    
                                    </div>
                                    
                                

                        </div>
                    </div>
                   </div>
                   <div class="col-12 mt-5">
                          <div class="card">
                            <img src='http://localhost:3000/img/Rectangle 5 (1).png' class="card-img-top" alt="..."/>
                        <div class="card-body ">
                          <h5 class="card-title  ml-5 ">🔬️ Education</h5>
                          <h3 class="card-text font-weight-bold text-dark  ml-5">Tax Benefits for Investment under National 
                           <a className='btn '>   <img className='pl-5 ml-5' src='http://localhost:3000/img/vector (1).png'/> </a>
                           Pension Scheme launched by Government
                              </h3>

                          <p class="card-text  text-dark  ml-5">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                              
                                
                                    <div className='mt-5 ml-0 col-12'>
                                        <div className='col-lg-4 col-md-12 float-left'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/Rectangle 3 (1).png'/>
                                            Sarah West
                                        </p>

                                        </div>
                                        <div className='col-lg-4 col-md-12 pt-3 float-right'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/eye.svg'/>
                                            1.4k views
                                            <img className='mr-4 pl-5' src='http://localhost:3000/img/Vector (2).png'/>
                                        </p>

                                        </div>

                                    
                                    </div>
                                    
                                

                        </div>
                    </div>
                   </div>

                   <div class="col-12 mt-5">
                          <div class="card">
                            <img src='http://localhost:3000/img/Rectangle 5 (2).png' class="card-img-top" alt="..."/>
                        <div class="card-body ">
                          <h5 class="card-title  ml-5">🗓️ Meetup</h5>
                          <h4 class="card-text font-weight-bold text-dark  ml-5">Finance & Investment Elite Social Mixer @Lujiazui 
                           <a className='btn'>   <img className='pl-5 ml-5 pr-5' src='http://localhost:3000/img/vector (1).png'/> </a>
                           
                              </h4>

                                   <div className='mt-5 col-12'>
                                       
                                        <div className='col-lg-12 col-md-12 pt-3 '>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/Vector (6).png'/>
                                            Fri, 12 Oct, 2018
                                            <img className='mr-4 pl-5' src='http://localhost:3000/img/Vector (5).png'/>
                                            Ahmedabad, India
                                        </p>

                                        </div>

                                    
                                    </div>
                         <button className='text-center btn col-12 bg-light border mt-5'>Visit Website</button>    
                                
                                    <div className='mt-5 ml-0 col-12'>
                                        <div className='col-lg-4 col-md-12 float-left'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/Rectangle 3 (2).png'/>
                                            Sarah West
                                        </p>

                                        </div>
                                        <div className='col-lg-4 col-md-12 pt-3 float-right'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/eye.svg'/>
                                            1.4k views
                                            <img className='mr-4 pl-5' src='http://localhost:3000/img/Vector (2).png'/>
                                        </p>

                                        </div>

                                    
                                    </div>
                                    
                                

                        </div>
                    </div>
                   </div>

                   
                   <div class="col-12 mt-5">
                          <div class="card">
                          
                        <div class="card-body ">
                          <h5 class="card-title ml-5">💼️ Job</h5>
                          <h4 class="card-text font-weight-bold text-dark  ml-5">Software Developer
                           <a className='btn'>   <img className=' ml-5 pr-5' style={{paddingLeft:"290px"}} src='http://localhost:3000/img/vector (1).png'/> </a>
                           
                              </h4>

                                   <div className='mt-5 col-12'>
                                       
                                        <div className='col-lg-12 col-md-12 pt-3 '>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/Vector (6).png'/>
                                            Software Developer
                                            <img className='mr-4 pl-5' src='http://localhost:3000/img/Vector (5).png'/>
                                            Ahmedabad, India
                                        </p>

                                        </div>

                                    
                                    </div>
                         <button className='text-center btn col-12 bg-light border mt-5 text-sucess'>Apply on Timesjobs</button>    
                                
                                    <div className='mt-5 ml-0 col-12'>
                                        <div className='col-lg-4 col-md-12 float-left'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/Rectangle 3 (2).png'/>
                                            Joseph Gray
                                        </p>

                                        </div>
                                        <div className='col-lg-4 col-md-12 pt-3 float-right'>
                                        <p> 
                                            <img className='mr-4' src='http://localhost:3000/img/eye.svg'/>
                                            1.4k views
                                            <img className='mr-4 pl-5' src='http://localhost:3000/img/Vector (2).png'/>
                                        </p>

                                        </div>

                                    
                                    </div>
                                    
                                

                        </div>
                    </div>
                   </div>
                   </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section2">
                        <h3>Section 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, magna a ultricies volutpat, mi eros viverra massa, vitae consequat nisi justo in tortor. Proin accumsan felis ac felis dapibus, non iaculis
                            mi varius.
                        </p>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section3">
                        <p>
                            Proin accumsan felis ac felis dapibus, non iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, magna a ultricies volutpat, mi eros viverra massa, vitae consequat nisi justo in tortor.
                            mi varius.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
        <ul className='float-right nav '>
                      <li ><a className='btn btn-light float-left mr-4'>Write a Post<img className='pl-4' src='http://localhost:3000/img/vector.png'/> </a></li>
                    <li ><a  className='btn btn-primary float-right text-white' ><img className='pr-2' src='http://localhost:3000/img/vector (7).png'/> Join Group</a></li>
               
                </ul>

              
       
        <div className='d-{breakpoint}-{inline-block} float-right fl1'>
                    <p className=''><img className='pr-2' src='http://localhost:3000/img/vector (5).png'/> Noida, India <img className='' style={{paddingLeft:"150px"}} src='http://localhost:3000/img/vector (8).png'/></p>
                </div>

<p className='fl2 col-7'><img className='pr-2' src='http://localhost:3000/img/vector (9).png'/>Your location will help us serve better and extend a personalised experience.</p>
                </div>
    </div>
</div>                                                                         
</div>
  )
}

export default NestedNav