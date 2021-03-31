def capitalize(str)
  words = str.split(" ")

  puts words.map(&:capitalize).join(" ")
end
puts "英文を入力してください"
puts capitalize(STDIN.gets)
