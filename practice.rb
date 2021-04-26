# 練習用ファイル

# paiza デフォルト
# data = gets.split(" ")
# criteria = data[0].to_i
# count = data[1].to_i

# while 0 < count
# g = gets.to_i
#   if g - criteria < 0
#     puts criteria
#   elsif g % criteria == 0
#     puts g
#   else
#     result = g / criteria.to_f
#     value = result.round
#     puts criteria * value
#   end
# count -= 1
# end

data = gets.split(" ")
many = data[0].to_i
border = data[1].to_i
id = 0;

while 0 < many
student = gets.split(" ")
score = student[0].to_i
absence = student[1].to_i
id += 1
  if border > 0
    grades = score - absence * 5
  else
    grades = 0;
  end

  if border <= grades
    puts id
  end
many -= 1
end


data = gets.split(" ")
many = data[0].to_i
border = data[1].to_i
tree = gets.split(" ").map(&:to_i)
count = gets.to_i

while 0 < count
  tree_ab = gets.split(" ").map(&:to_i)

  tree.sum{ |x| x[tree_ab.map{ |a| a -= 1 }] }

many -= 1
end
