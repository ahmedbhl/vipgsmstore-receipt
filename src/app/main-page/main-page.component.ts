import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  public selectedCountryCode;

  public form: FormGroup;

  public submitted = false;

  public signatureImage;

  constructor(private readonly _formBuilder: FormBuilder) {
    this._initFormGroupe();
  }
  ngOnInit(): void {
  }

  /**
   * init all the fields of the form Group and add the validation
   */
  private _initFormGroupe() {
    this.form = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      birthday: ["", Validators.required],
      birthplace: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      zip: ["", Validators.required],
      reasonList: this._formBuilder.array([]),
      exitDate: [
        new Date().toISOString().substring(0, 10),
        Validators.required
      ],
      exitTime: [new Date().toTimeString().substring(0, 5), Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get formControls() {
    return this.form.controls;
  }

  /**
   * Submit the form values
   */
  public async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      // this.signatureImage = '';
      // return;
    }

    this.submitted = false;
  }

  printPage() {
    window.print();
  }
}
