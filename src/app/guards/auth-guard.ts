import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('jwt');

  if (!token) {
    router.navigate(['/inicio']);
    return false;
  }

   try {
    const decoded: any = jwtDecode(token);

    const isExpired = decoded.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem('jwt');
      router.navigate(['/inicio']);
      return false;
    }

    return true;

  } catch {
    router.navigate(['/inicio']);
    return false;
  }
  return true;
};
