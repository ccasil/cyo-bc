import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder) {}
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  cardForm: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    email: new FormControl('')
  });
  cardInfo: any = '';
  message: string = '';
  url: any;
  imagePath: any;
  lightdarkswitch = true;
  brighttext = 'Dark'

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.cardForm.valueChanges.subscribe(val => {
      console.log(val);
      this.cardInfo = val;
    });
  }
  

onFileChanged(event: any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
}

  onSwitchChanged() {
    this.lightdarkswitch = !this.lightdarkswitch
    if(this.lightdarkswitch){
      this.brighttext = "Dark";
    } else {
      this.brighttext = "Light";
    }
  }

}
