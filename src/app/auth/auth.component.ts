import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective} from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnDestroy{
  constructor(private authService: AuthService, private componentFactoryResolver  :ComponentFactoryResolver) { }
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static : false}) alertHost : PlaceholderDirective;

  private closeSub : Subscription;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    if (!form.valid) {
      return;
    }
    let authObs : Observable<AuthResponseData>;

    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    
    if (this.isLoginMode) {
        authObs = this.authService.login(email,password);
    } else {
     authObs = this.authService.signup(email, password);
    }
    
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      });
  }
  onHandleError(){
    this.error = null;
  }

  private showErrorAlert(message : string){
      // const alertCmp = new AlertComponent();
      const alertcmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      const hostViewContainerRef =  this.alertHost.viewContainerRef;
      hostViewContainerRef.clear();
      const componentRef = hostViewContainerRef.createComponent(alertcmpFactory);
      componentRef.instance.message = message;
      this.closeSub = componentRef.instance.close.subscribe(() => {
         this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(){
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
}
