function do_status(s) {
  document.rsatest.status.value = s;
}

function do_init() {
  if(document.rsatest.n.value.length == 0) set_1024f4();
}

function do_encrypt() {
  var before = new Date();
  var rsa = new RSAKey();
  rsa.setPublic(document.rsatest.n.value, document.rsatest.e.value);
  var res = rsa.encrypt(document.rsatest.plaintext.value);
  var after = new Date();
  if(res) {
    document.rsatest.ciphertext.value = linebrk(res, 64);
    document.rsatest.decrypted.value = "";
    do_status("Encryption Time: " + (after - before) + "ms");
  }

}

function do_decrypt() {
  do_status("Decrypting...");
  var before = new Date();
  var rsa = new RSAKey();
  var dr = document.rsatest;
  rsa.setPrivateEx(dr.n.value, dr.e.value, dr.d.value, dr.p.value, dr.q.value, dr.dmp1.value, dr.dmq1.value, dr.coeff.value);
  if(document.rsatest.ciphertext.value.length == 0) {
    do_status("No Ciphertext - encrypt something first");
    return;
  }

  var res = rsa.decrypt(document.rsatest.ciphertext.value);
  var after = new Date();
  if(res == null) {
    document.rsatest.decrypted.value = "*** Invalid Ciphertext ***";
    do_status("Decryption failed");
  }

  else {
    document.rsatest.decrypted.value = res;
    do_status("Decryption Time: " + (after - before) + "ms");
  }

}

function do_genrsa() {
  var before = new Date();
  var rsa = new RSAKey();
  var dr = document.rsatest;
  do_status("Generating RSA Key...");
  rsa.generate(parseInt(dr.bits.value),dr.e.value);
  dr.n.value = linebrk(rsa.n.toString(16),64);
  dr.d.value = linebrk(rsa.d.toString(16),64);
  dr.p.value = linebrk(rsa.p.toString(16),64);
  dr.q.value = linebrk(rsa.q.toString(16),64);
  dr.dmp1.value = linebrk(rsa.dmp1.toString(16),64);
  dr.dmq1.value = linebrk(rsa.dmq1.toString(16),64);
  dr.coeff.value = linebrk(rsa.coeff.toString(16),64);
  var after = new Date();
  do_status("Key Generation Time: " + (after - before) + "ms");
}