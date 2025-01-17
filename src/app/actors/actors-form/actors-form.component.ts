import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.models';

@Component({
  selector: 'app-actors-form',
  standalone: true,
  imports: [],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    name: [ '', {validators : [Validators.required]}],
    dateOfBirth: new FormControl<Date|null>(null)
  })

  @Input()
  model?: ActorDTO;

  @Output()
  postForm = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void{
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }

  }

  getErrorMessagesForName(): string {
      let field = this.form.controls.name;
      if(field.hasError('required')){
        return "the name field is required";
      }

      return "";
  }

  saveChanges(){
    const actor = this.form.value as ActorCreationDTO;
      this.postForm.emit(actor);
    }
  }




