def starRating(str)
  rating = str.to_f
  result = "";
  starCount = 0

  while starCount < 5
    if rating >= 1
      result += "★ "
      rating -= 1
    elsif rating > 0
      if rating + 0.25 >= 1
        result += "★ "
      elsif rating + 0.25 >= 0.5
        result += "☆ "
      else
        result += "* "
      end
      rating -= rating
    else
      result += "* "
    end
    starCount += 1
  end
  puts "評価は" + result + "です"
end
puts "評価を入力してください。例）2.38"
puts starRating(STDIN.gets)
