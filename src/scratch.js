TODO
-use airbnb lottie -> css animation for SHPE branding

DONE but check
-

DONE compromises
-CSS gaussian blur main navbar background
  -White box shadow under navbar limit
-import Avenir Next
  -Check how font licensing works

DONE forsure
-create routes
-install react router dom


// NAV BLOCK WITH SVG ICONS and button sub-categories
/* NAV BLOCK START */
<div className="py-4">
  <div className="my-3">
    <nav class="nav nav-pills nav-justified flex-column flex-sm-row">
      <a role="button" class="mx-3 nav-item flex-sm-fill text-sm-center btn btn-outline-primary" href="#">
        <SCUAthleticsIcon/>
      </a>
      <a role="button" class="mx-3 nav-item flex-sm-fill text-sm-center btn btn-outline-primary" href="#">
        <SHPEIcon/>
      </a>
      <a role="button" class="mx-3 nav-item flex-sm-fill text-sm-center btn btn-outline-primary" href="#">
        <MAWOIcon/>
      </a>
    </nav>
  </div>
  <div className="my-3">
    <nav class="nav nav-pills nav-justified flex-column flex-sm-row">
      <a role="button" class="mx-3 nav-item flex-sm-fill text-sm-center btn btn-outline-primary" href="#">Print</a>
      <a role="button" class="mx-3 nav-item flex-sm-fill text-sm-center btn btn-outline-primary" href="#">Digital</a>
      <a role="button" class="mx-3 nav-item flex-sm-fill text-sm-center btn btn-outline-primary" href="#">Logos</a>
      <a role="button" class="mx-3 nav-item flex-sm-fill text-sm-center btn btn-outline-primary" href="#" tabindex="-1" aria-disabled="true">Motion Graphics</a>
    </nav>
  </div>
</div>
/* NAV BLOCK END */







// ORIGINAL NAVBAR
<div className="container">
  <div className="navbar_container">
    <span className="left-nav">
        <Navbar.Brand><h1 className={"navbar-brand"}>CLT</h1></Navbar.Brand>
    </span>
    <Navbar.Collapse id="responsive-navbar-nav">

      <span>
        <Nav className={"standard_nav"}>
            <NavLink to='/'>Who</NavLink>
            <NavLink to='/What'>What</NavLink>
            <NavLink to='/How'>How</NavLink>
        </Nav>
      </span>
    </Navbar.Collapse>

      <span className="right-nav">
        <div className="d-flex social-row">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <div className="p-1">
            <a href="http://www.instagram.com/cesarsalaad" target="_blank">
              <InstagramIcon width={40} />
            </a>
          </div>
          <div className="p-1">
            <a href="#" target="_blank">
              <GithubIcon width={40} />
            </a>
          </div>
          <div className="p-1">
            <a href="#" target="_blank">
              <LinkedinIcon width={40} />
            </a>
          </div>
          </Navbar.Collapse>
        </div>
      </span>

  </div>
</div>
