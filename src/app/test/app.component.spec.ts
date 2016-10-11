/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { routing } from "../app.routing";
import { HomePageComponent } from "../blog/homepage/homepage.component";
import { HeaderComponent } from "../blog/header/header.component";
import { FooterComponent } from "../blog/footer/footer.component";
import { SearchComponent } from "../blog/header/search/search.component";
import { MenuComponent } from "../blog/header/menu/menu.component";
import { LoginComponent } from "../login/login.component";
import { AddPostComponent } from "../blog/posts/add-post/add-post.component";
import { AllPostsComponent } from "../blog/posts/all-posts/all-posts.component";
import { SinglePostComponent } from "../blog/posts/single-post/single-post.component";
import { NotFoundComponent } from "../blog/not-found/not-found.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LoginService } from "../service/login.service";
import { NotAuthorizedGuard } from "../blog/not-authorized.guard";

describe('App: Ang2Sergeblog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        MenuComponent,
        LoginComponent,
        AddPostComponent,
        AllPostsComponent,
        SinglePostComponent,
        HomePageComponent,
        NotFoundComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        routing
      ],
      providers: [
        LoginService,
        NotAuthorizedGuard
      ]
    });
  });

  describe('1st tests', () => {
    it('true is true', () => expect(true).toBe(true));
  });

  describe('2nd tests', () => {
    it('true is true', () => expect(true).toBe(true));
  });

  describe('3rd test', () => {
    it('true is true', () => expect(true).toBe(true));
  });




  //Examples
  // it('should create the app', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  //
  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});