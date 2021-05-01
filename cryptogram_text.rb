data = gets.chomp.split(" ")
count = data[0].to_i
line = data[1].split("")
text = gets.chomp.split("")
abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "]

text.each do |letter|
    sub_count = count
    if letter != " "
        while 0 < sub_count
            search_letter = line.index(letter)
            letter = letter.replace(abc[search_letter])
            sub_count -= 1
        end
    end
end
result = text.join("")
puts result
