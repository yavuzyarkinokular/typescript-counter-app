# Açıklama

1- İlk kısımda, HTML DOM öğelerini seçiyoruz. getElementById fonksiyonunu kullanarak sayacın değerini gösteren countElement, artırma düğmesini temsil eden incrementButton, ve azaltma düğmesini temsil eden decrementButton adında üç değişken oluşturuyoruz. Bu öğelerin türlerini tanımlayarak TypeScript'te tür güvencesi sağlıyoruz.

2- count adında bir sayacı sıfırlıyoruz.

3- incrementCount adında bir işlev oluşturuyoruz. Bu işlev, sayacı artıran ve ardından updateCount işlevini çağıran bir işlem içerir.

4- decrementCount adında bir işlev oluşturuyoruz. Bu işlev, sayacı azaltan ve ardından updateCount işlevini çağıran bir işlem içerir.

5- updateCount adında bir işlev oluşturuyoruz. Bu işlev, countElement adlı HTML öğesinin içeriğini sayacın mevcut değeri ile günceller.

6- Artırma ve azaltma düğmelerine tıklama olaylarını dinlemek için addEventListener kullanıyoruz. Eğer düğmeler (incrementButton ve decrementButton) tanımlanmışsa, tıklama olaylarını işlemek üzere incrementCount ve decrementCount işlevlerini ekleriz.

7- Son olarak, başlangıçta sayacı güncellemek için updateCount işlevini çağırırız.

### Tsconfig dosyasının başta olması gereken şekli

{
"compilerOptions": {
"target": "ES6",
"outDir": "./dist",
"rootDir": "./src",
"strict": true
}
}
