def ticket(str)
  i = str.to_i
  people = 150000 + 700 * (250 - i)


  puts "搭乗人数"
  puts people
end
# $250で15万人が利用する
# $10安くなると7000人増える（高くなれば減る）
puts "チケットの金額を入力してください"
puts ticket(STDIN.gets)
