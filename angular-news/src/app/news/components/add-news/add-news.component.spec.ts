import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddNewsComponent} from './add-news.component';
import {
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import newsRoutes from '../../mock/news-routers';
import {AddNewsStubComponent} from './add-news.stub.component';
import {EditNewsStubComponent} from '../edit-news/edit-news.stub.component';
import {ReadMoreStubComponent} from '../read-more/read-more.stub.component';
import {NewsStubComponent} from '../../news.stub.component';
import {NewsSourceStubComponent} from '../news-src/news-source.stub.component';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(newsRoutes),
        BrowserAnimationsModule
      ],
      declarations: [
        AddNewsComponent,
        AddNewsStubComponent,
        EditNewsStubComponent,
        ReadMoreStubComponent,
        NewsSourceStubComponent,
        NewsStubComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
