@extends('main-template')
@section('content')
    @include('components.department.header')
    <div class="breadcrumbs">
      <div class="crumb-item"><a href="">Saferide</a></div>
      <div class="crumb-item"><a href="">Current Student</a></div>
      <div class="crumb-item">Get a Room</div>
    </div>
    <div class="main-container">
      <div class="sub-navigation-lvl-2-region">
        <div class="sub-navigation-lvl-2-container">
          <div class="sub-navigation-lvl-2-title"><span>current students</span></div>
          <nav class="sub-navigation-lvl-2">
            <li class="active"><a href=""><span class="lvl-nav-title-info">Submenu For :</span> get a room</a>
              <ul class="lvl-3">
                <li><a href="">Apply now</a></li>
                <li><a href="">Request Special Consideration</a></li>
                <li><a href="">Residence Board Contract</a></li>
                <li><a href="">Rates '13-'14</a></li>
                <li><a href="">Housing Options</a></li>
                <li><a href="">New Student Application Procedures</a></li>
              </ul>
            </li>
            <li><a href="">change your room</a></li>
            <li><a href="">your nu home</a></li>
            <li><a href="">get involved</a></li>
            <li><a href="">get a job</a></li>
          </nav>
        </div>
      </div>
      <div class="dept-quick-links-region">
        <div class="dept-quick-links-container">
          <div class="dept-quick-links-title">quick links</div>
          <nav class="dept-quick-links">
            {{-- system-region department-quick-links --}}
            <li><a href="http://www.google.com">Home Page</a></li>
            <li><a href="http://www.google.com">Find a Job</a></li>
            <li><a href="http://www.google.com">Career cat</a></li>
            <li><a href="http://www.google.com">FAQs</a></li>
          </nav>
        </div>
      </div>

      <div id="main" role="main">
        @yield('main-area')
      </div>
    </div>
@stop