import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } form "./components/first-component/first-component.component";

const routes: Routes = [
	{path: "", component: FirstComponentComponent}
]


!NgModule({
	declarations:[],
	imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}
