import React from"react";

function RightSection(){
    return(
        <div>
            <form action="/send" method="post">
                        <div class="mb-4 shadow-lg">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                        </div>
                        <div class="mb-4 shadow-lg">
                            <input type="email" class="form-control" id="exampleFormControlInput1"  placeholder="Your email"/>
                        </div>
                        <div class="mb-4 shadow-lg">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"  placeholder="Typing your message here....."></textarea>
                        </div>
                        <button type="button" class="btn btn-warning">Send message</button>
                    </form>
        </div>
    )
}
export default RightSection;