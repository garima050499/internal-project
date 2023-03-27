import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Injectable()

export class LoadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(private loadingService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('caught')
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          setTimeout(()=>{
            this.loadingService.setLoading(false);
          },500)
          
        }
      })
    );
  }
}
