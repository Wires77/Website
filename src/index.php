<html ng-app="Website">
<head>
    <title>Trevor's Website</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="websiteStyle.css"/>
	<script type="text/javascript">
		var WUNDER_KEY = '<?php echo getenv('WUNDER_KEY');?>'
	</script>
    <!-- build:js /js/website.js -->
    <script type="text/javascript" src="bower.js"></script>
    <script type="text/javascript" src="gapi.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="views/dress/DressCtrl.js"></script>
    <script type="text/javascript" src="views/TripWeather/TripWeatherCtrl.js"></script>
    <!-- endbuild -->
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=<?php echo getenv('GAPI_KEY');?>&callback=onGoogleReady"></script>
    <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.3.js"></script>
</head>
<body class="ng-cloak">
<header class="navbar navbar-default navbar-fixed-top navbar-inner">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3" ng-click="isCollapsed = !isCollapsed">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand visible-xs" href="#">UI Bootstrap</a>
        </div>
        <nav class="hidden-xs">
            <ul class="nav navbar-nav">
                <a href="#top" role="button" class="navbar-brand">
                    Trevor's Website
                </a>
                <li class="dropdown" uib-dropdown>
                    <a role="button" class="dropdown-toggle" uib-dropdown-toggle>
                        Pet projects <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#/dress">Dress Colorpicker</a></li>
                        <li><a href="#/tripweather">Trip Weather</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</header>
    <div class="container">
	<div class="row">
	    <div class="col-md-12">
		<div ng-view></div>
	    </div>
	</div>
    </div>
</body>
</html>