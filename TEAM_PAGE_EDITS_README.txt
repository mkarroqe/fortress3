TO SITE EDITOR on adding new bios on Team page:

1.  Underneath the comment "1. NAMES," fill in 
    the following template and add under the appropriate name; each "name box" is separated with a line break. 

    You will need to change the <a> id to #firstName_lastInitial, the <h2> with the full name, and the <h4> to their title.

    This will be one of the blue boxes with team member names and titles.
    
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 portfolio-item">
        <a href="#firstName_lastInitial" class="portfolio-link" data-toggle="modal">
            <div class="member_info caption">
                <h2>Full <br/> Name</h2>
                <h4>Title</h4>
            </div>
            <img src="img/portfolio/blue.png" class="img-team img-responsive" alt="blue tent">
        </a>
    </div>

2.  Underneath the comment "2. BIOS," fill in the
    following template and add under the appropriate name.  This will be the pop-up modal with the bio.

    You will need to change the main <div> id to the respective firstName_lastInitial, the <h5 class modal-title"> to their full name, the <p> underneath it to their title, and add their bio where it says "*BIO TEXT HERE*".

    <div id="firstName_lastInitial" class="modal fade">
      <div class="modal-dialog modal-lg" role="dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Full Name</h5>
            <p>Title</p>
          </div>
          <div class="modal-body">
            <p>
                * BIO TEXT HERE *
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

Thanks! Feel free to email me at mkarroqe@gmail.com with any questions.