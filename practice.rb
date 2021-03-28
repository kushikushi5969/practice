def LetterCountI(str)

  puts "①文字が最も重複した単語を出力（最大重複が同じ場合、より先頭の単語）"
  puts "②重複した文字を含む単語がない場合は「-1」"
  puts str
end

puts "英文を入力して下さい"
puts LetterCountI(STDIN.gets)
