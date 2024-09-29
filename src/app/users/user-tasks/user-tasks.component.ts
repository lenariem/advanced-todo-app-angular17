import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  loadedUserId: string | null = null;
  // userName: string | undefined;
  userName = input.required<string>();

  message = input.required<string>();

  private activatedRoute = inject(ActivatedRoute);

  /*  private usersService = inject(UsersService);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  users = this.usersService.users; */

  // can extract from url direct if use in config withComponentInputBinding()
  /*  userId = input.required<string>();
   // without signal
   // @Input({required: true}) userId!: string;
   
   userName1 = computed(
    () => this.usersService.users.find((u) => u.id === this.userId())?.name
  );

  
 ngOnInit(): void {
    console.log('Input Data: ' + this.message);

    // get the user ID from the route
    const subscription = this.route.paramMap.subscribe((params) => {
      this.loadedUserId = params.get('userId');

      if (this.loadedUserId) {
        const loadedUser: User[] = this.users.filter(
          (user) => user.id === this.loadedUserId
        );

        if (loadedUser.length > 0) {
          this.userName = loadedUser[0].name;
        }
      }

      //this.activatedRoute.paramMap.subscribe({
      //next: (paramMap) => {
      //   this.userName = this.userService.users.find(user => user.id === paramMap.get('userId'))?.name || ''
      //}}) 
   // });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }*/

 /*  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  } */
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find(
      (user) => user.id === activatedRoute.paramMap.get('userId')
    )?.name || '';

  return userName;
};



export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
};