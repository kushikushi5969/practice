data = gets.split(" ")
h = data[0].to_i
m = data[1].to_i
answer = [];

for i in 0..h-1
c = gets.chomp
bob = c.split(" ").map(&:to_i)
sum = bob.sum
count = 0;
anna = [];
    while count < m
        anna << bob[0]
        bob.delete_at(0)
        if (anna.sum == bob.sum)
            result = anna.map{|x| x = "A"} + bob.map{|x| x = "B"}
            answer << result.join("").to_s
        end
        count += 1
    end

end

if (answer.empty?)
    puts "No"
else
    puts "Yes"
    puts answer
end
