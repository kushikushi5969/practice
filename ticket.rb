def ticket(str)
  i = str.to_i
  people = 150000 + 700 * (250 - i)


  puts "搭乗人数"
  puts people
end
puts "チケットの金額を入力してください"
puts ticket(STDIN.gets)
