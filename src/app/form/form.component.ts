import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { links } from '../home/home.data';
import{NgForm} from '@angular/forms'
import { FirebaseContactService } from '../servizi/firebase-contact.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private contactMessage: FirebaseContactService){}


  contactForm!: FormGroup;
  ngOnInit(): void{
    subscribe:
this.contactForm = new FormGroup({

  nome: new FormControl(null, Validators.required),
  cognome: new FormControl(null),
  email: new FormControl(null, [Validators.required, Validators.email]),
  messaggio: new FormControl(null , Validators.required),
  regione: new FormControl(null)
})



  }

  onSubmit(){
    this.contactMessage.insertMessage('https://gliziidisicilia-d8c04-default-rtdb.europe-west1.firebasedatabase.app/messaggi.json',
    {nome: this.contactForm.value.nome, cognome: this.contactForm.value.cognome, email: this.contactForm.value.email, messaggio: this.contactForm.value.messaggio,
      regione: this.contactForm.value.regione }).subscribe((data)=>{console.log(data)})
      if(this.contactForm.valid){
        this.contactForm.reset()
        alert('Grazei per averci contattato ti risponderemo nel più breve tempo possibile')
      }
  }



  linkPages = links
  form= false
}
