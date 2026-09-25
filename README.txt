LAWYER CHAMBER — ONLINE ADMIN EDITION

এই সংস্করণে:
- Supabase database দিয়ে সবার জন্য একই তথ্য live/shared হবে
- Admin login
- গ্রাহক সংখ্যা, মামলা, অভিজ্ঞতা, পরামর্শ ইত্যাদি edit
- ছবি/ভিডিও upload ও delete
- Public gallery
- Supabase Storage

কাজ চালু করতে ৫টি ধাপ:
1) Supabase-এ Free project তৈরি করুন।
2) Authentication > Users থেকে একটি admin email/password user তৈরি করুন।
3) Storage-এ public bucket "gallery" তৈরি করুন।
4) supabase.sql-এ YOUR_ADMIN_USER_UUID-এর জায়গায় admin user-এর UUID বসিয়ে SQL Editor-এ চালান।
5) config.js-এ Supabase Project URL এবং Publishable/anon key বসান।
6) পুরো folder GitHub Pages-এ upload করুন।

গুরুত্বপূর্ণ:
- service_role/secret key কখনো config.js বা browser code-এ দেবেন না।
- Supabase Free plan-এ সীমা ও inactivity pause থাকতে পারে।


CORRECTED ADMIN EMAIL
The admin login email has been corrected everywhere to: lawerchember@gmail.com
Create/use this exact email in Supabase Authentication > Users. The password is the one you set in Supabase; do not place a password in public website files.
