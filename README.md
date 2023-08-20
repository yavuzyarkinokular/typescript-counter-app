# Açıklama

İlk kısımda, HTML DOM öğelerini seçiyoruz. getElementById fonksiyonunu kullanarak sayacın değerini gösteren countElement, artırma düğmesini temsil eden incrementButton, ve azaltma düğmesini temsil eden decrementButton adında üç değişken oluşturuyoruz. Bu öğelerin türlerini tanımlayarak TypeScript'te tür güvencesi sağlıyoruz.

count adında bir sayacı sıfırlıyoruz.

incrementCount adında bir işlev oluşturuyoruz. Bu işlev, sayacı artıran ve ardından updateCount işlevini çağıran bir işlem içerir.

decrementCount adında bir işlev oluşturuyoruz. Bu işlev, sayacı azaltan ve ardından updateCount işlevini çağıran bir işlem içerir.

updateCount adında bir işlev oluşturuyoruz. Bu işlev, countElement adlı HTML öğesinin içeriğini sayacın mevcut değeri ile günceller.

Artırma ve azaltma düğmelerine tıklama olaylarını dinlemek için addEventListener kullanıyoruz. Eğer düğmeler (incrementButton ve decrementButton) tanımlanmışsa, tıklama olaylarını işlemek üzere incrementCount ve decrementCount işlevlerini ekleriz.

Son olarak, başlangıçta sayacı güncellemek için updateCount işlevini çağırırız.

### Tsconfig dosyasının başta olması gereken şekli

{
"compilerOptions": {
"target": "ES6",
"outDir": "./dist",
"rootDir": "./src",
"strict": true
}
}
