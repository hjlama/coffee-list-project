import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoffeeDetailsComponent } from './coffee-list/coffee-list.component'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

describe('AppComponent', () => {
  let component: CoffeeDetailsComponent;
  let fixture: ComponentFixture<CoffeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoffeeDetailsComponent,
      ],
      imports: [
        BrowserModule, ,
        HttpClientTestingModule,
        CommonModule,
        // MatCardModule,
        // MatPaginatorModule,
        StoreModule.forRoot(provideMockStore),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CoffeeDetailsComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    fixture.detectChanges();
    expect(component)
      .toBeTruthy();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ibm-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ibm-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ibm-project app is running!');
  });
});

