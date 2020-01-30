    ##
	Angular Routing
	==============
	
	1. Define your route URL's
	2. Create Angular Component for each view (One for Each Route).
	3. Configure Angular to map route to URL's component.
	
	While create a project in angular selecting routing enablement during the creation following changes that is going to made.
		1. In package.json Angular router is added as a dependency.
		2. In app.module.ts it has included the AppRoutingModule.
		3. Created Module called app-routing.module.ts
				In app-routing.module.ts
				const routes:Routes=[];
				The above is the array of routes in which you can configure your routes.
						const routes: Routes = [
							{path:'home',component:HomeComponent}
							]
			
	
	##
	Step 1. Creating route in the routes section of the app-routing.module.ts
				```const routes: Routes = [
					{path:'admin',component:AdminComponent}];
				```
    ##             
	Step 2. So when somebody goes to this route the 
				```
					<div class="container my-3 py-3">
						<router-outlet></router-outlet>
					</div>
				```
	