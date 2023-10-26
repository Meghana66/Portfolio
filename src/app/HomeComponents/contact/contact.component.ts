import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmailService } from 'src/app/Services/email.service';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('formDirective') private formDirective: NgForm;

  FormData: FormGroup;

  constructor(private emaiService:EmailService,
    private notifierService: NotificationService)
  {
    this.FormData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      });
  }

  onSubmit(form: FormGroup){
    if(form.valid){
      const values = form.value;
      const input = {
        name: values.name,
        replyto: values.email,
        message: values.message,
        subject:"Someone wants to hire you"
      }
      this.emaiService.SendEmail(input).subscribe(resp=>{
        form.reset();
        this.formDirective.resetForm();
        this.notifierService.showNotification("success", "Sent Successfully, Thank you for contacting!!!");
        this.notifierService.showNotification("info", "I will contact you soon.")
      },
      (err)=>{
        console.log(err);
      }
      );
    }
  }

}
