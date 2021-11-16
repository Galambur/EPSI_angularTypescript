import { Component, OnInit } from '@angular/core';
import {UsersService} from "../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LdapDetailComponent} from "../ldap-detail/ldap-detail.component";

@Component({
  selector: 'app-ldap-edit',
  templateUrl: '../ldap-detail/ldap-detail.component.html',
  styleUrls: ['../ldap-detail/ldap-detail.component.scss']
})
export class LdapEditComponent extends LdapDetailComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    fb: FormBuilder,
    router: Router
  ) {
    super(false, fb, router);
  }

  ngOnInit(): void {
    super.onInit();
  }

  private getUser(): void {
    const login = this.route.snapshot.paramMap.get('id');
    console.log('in detail : ' + login);

    this.usersService.getUser(login).subscribe(
      user => {
        this.user = user;
        console.log("LdapDetail getUser = ");
        console.log(user);
      }
    )
  }

  validateForm(): void {
    console.log('Ldap edit component - validateForm');
  }
}
