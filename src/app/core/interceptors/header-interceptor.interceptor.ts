import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const interceptedRequest = req.clone({
    setHeaders: {
      'X-RapidAPI-Key': '19390cb9d4msh526432bedef9373p147597jsn06606fea107d',
      'Content-Type': 'application/json',
    },
  });
  return next(interceptedRequest);
};
