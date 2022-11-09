var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./public/public.module#PublicModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/public/public-routing.module.ts","module":"PublicRoutingModule","children":[{"path":"","component":"PlayoutComponent","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","component":"HomeComponent"},{"path":"produit","component":"ProduitComponent"},{"path":"contact","component":"ContactComponent"}]}],"kind":"module"}],"module":"PublicModule"}]},{"path":"admin","loadChildren":"./admin/admin.module#AdminModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","component":"AlayoutComponent","children":[{"path":"","redirectTo":"dashboard","pathMatch":"full"},{"path":"dashboard","component":"DashboardComponent"},{"path":"user","loadChildren":"./user/user.module#UserModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/user/user-routing.module.ts","module":"UserRoutingModule","children":[{"path":"","component":"UIndexComponent"},{"path":"add","component":"UAddComponent"},{"path":"edit/:id","component":"UEditComponent"},{"path":"delete/:id","component":"UDeleteComponent"}],"kind":"module"}],"module":"UserModule"}]},{"path":"produit","loadChildren":"./produit/produit.module#ProduitModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/produit/produit-routing.module.ts","module":"ProduitRoutingModule","children":[{"path":"","component":"PIndexComponent"},{"path":"add","component":"PAddComponent"},{"path":"edit/:id","component":"PEditComponent"},{"path":"delete/:id","component":"PDeleteComponent"}],"kind":"module"}],"module":"ProduitModule"}]}]}],"kind":"module"}],"module":"AdminModule"}]},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","component":"LoginComponent"},{"path":"logout","component":"LogoutComponent"}],"kind":"module"}],"module":"AuthModule"}]},{"path":"**","component":"ErrorComponent"}],"kind":"module"}]}