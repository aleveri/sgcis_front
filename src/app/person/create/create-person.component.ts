import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonType } from 'src/app/models/person-type';
import { PersonTypeService } from 'src/app/services/person-type.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  types: PersonType[];
  person: Person = new Person();
  description: string;

  constructor(private personTypeService: PersonTypeService,
    private personService: PersonService,
    private router: Router) { }

  ngOnInit() {
    this.personTypeService.list().subscribe((data: any) => {
      this.types = data.result;
    }, error => {
      console.log(error)
    });
  }

  onSubmit() {
    this.person.personType = this.types.find(x => x.description === this.description);
    this.personService.add(this.person).subscribe((data: any) => {
      if (!data.error)
        this.router.navigate(['dashboard/person']);
      else {
        alert(data.message);
      }
    });
  }

}
